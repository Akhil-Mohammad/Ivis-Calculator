package com.storage.calculator.service;

import com.storage.calculator.model.BandwidthModel;
import com.storage.calculator.model.CalculateOnBitrate;
import com.storage.calculator.model.CalculatorResults;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public CalculatorResults calculateBasedOnSize(int segmentTime, double segmentSize) {
        CalculatorResults result = new CalculatorResults();

        // Calculate the file size for one minute
        double fileSizeMinute = segmentSize * 60.0 / segmentTime;

        // Set the calculated values in the result object with rounding to 2 decimal places
        result.setFileSizeMinute(round(fileSizeMinute, 2));
        result.setStorageHour(round(fileSizeMinute * 60, 2));
        result.setStorageDay(round(fileSizeMinute * 60 * 24, 2));
        result.setStorageQuarter(round(fileSizeMinute * 60 * 24 * 90, 2)); // Assuming a quarter is 90 days
        result.setStorageYear(round(fileSizeMinute * 60 * 24 * 365, 2));
        result.setSegmentSize(round(segmentSize, 2));

        return result;
    }

    public CalculatorResults calculateBasedOnBitrate(int avgVideoBitrate, int maxVideoBitrate, int audioBitrate, int crf, int segmentTime) {
        CalculatorResults result = new CalculatorResults();
        float effectiveVideoBitrateKbps = calculateEffectiveBitrate(avgVideoBitrate, maxVideoBitrate, audioBitrate, crf);
        float totalBitrateKBps = effectiveVideoBitrateKbps / 8;
        float totalSizeKB = totalBitrateKBps * segmentTime;
        float totalSizeMB = totalSizeKB / 1024;

        double fileSizeMinute = totalSizeMB * 60.0 / segmentTime;

        // Set the calculated values in the result object with rounding to 2 decimal places
        result.setFileSizeMinute(round(fileSizeMinute, 2));
        result.setStorageHour(round(fileSizeMinute * 60, 2));
        result.setStorageDay(round(fileSizeMinute * 60 * 24, 2));
        result.setStorageQuarter(round(fileSizeMinute * 60 * 24 * 90, 2)); // Assuming a quarter is 90 days
        result.setStorageYear(round(fileSizeMinute * 60 * 24 * 365, 2));
        result.setSegmentSize(round(totalSizeMB, 2));

        return result;
    }

    private static final double KBPS_TO_MBPS = 0.001;
    private static final double KBPS_TO_GBPS = 0.000001;
    public BandwidthModel calculateStorageAndBandwidth(int numCameras, int bitrateKbps) {
        BandwidthModel result = new BandwidthModel();


        // Calculate bandwidth in Mbps and Gbps for given number of cameras
        double bandwidthMbps = bitrateKbps * KBPS_TO_MBPS * numCameras;
        double bandwidthGbps = bitrateKbps * KBPS_TO_GBPS * numCameras;

        result.setStoragePerHourPerCamera(calculateStorage(60 * 60, bitrateKbps));
        double storagePerDayPerCamera = calculateStorage(24 * 60 * 60, bitrateKbps) / 1000;
        double totalStorageForOneCameraOver30Days = calculateStorage(30 * 24 * 60 * 60, bitrateKbps) / 1000;


        result.setStoragePerDayPerCamera(round(storagePerDayPerCamera, 3));
        result.setTotalStorageForOneCameraOver30Days(round(totalStorageForOneCameraOver30Days, 3));
        result.setBandwidthMbps(round(bandwidthMbps, 4) + " Mbps");
        result.setBandwidthGbps(round(bandwidthGbps, 6) + " Gbps");

        return result;
    }


    private double calculateStorage(int durationSeconds, int bitrateKbps) {
        double totalBitrateKBps = bitrateKbps / 8.0;
        double totalSizeKB = totalBitrateKBps * durationSeconds;
        double totalSizeMB = totalSizeKB / 1024;
        return totalSizeMB;
    }

    private float calculateEffectiveBitrate(int avgVideoBitrate, int maxVideoBitrate, int audioBitrate, int crf) {
        float reductionFactor = 1.0f - (crf / 100.0f);
        float effectiveVideoBitrateKbps = avgVideoBitrate * reductionFactor;
        effectiveVideoBitrateKbps = Math.min(effectiveVideoBitrateKbps, maxVideoBitrate);
        return effectiveVideoBitrateKbps + audioBitrate;
    }



//    public CalculatorResults calculateBasedOnBitrate(CalculateOnBitrate calculateOnBitrate) {
//        CalculatorResults result = new CalculatorResults();
//        float effectiveVideoBitrateKbps = calculateEffectiveBitrate(avgVideoBitrate, maxVideoBitrate, audioBitrate, crf);
//        float totalBitrateKBps = effectiveVideoBitrateKbps / 8;
//        float totalSizeKB = totalBitrateKBps * segmentTime;
//        float totalSizeMB = totalSizeKB / 1024;
//
//        double fileSizeMinute = totalSizeMB * 60.0 / segmentTime;
//
//        // Set the calculated values in the result object with rounding to 2 decimal places
//        result.setFileSizeMinute(round(fileSizeMinute, 2));
//        result.setStorageHour(round(fileSizeMinute * 60, 2));
//        result.setStorageDay(round(fileSizeMinute * 60 * 24, 2));
//        result.setStorageQuarter(round(fileSizeMinute * 60 * 24 * 90, 2)); // Assuming a quarter is 90 days
//        result.setStorageYear(round(fileSizeMinute * 60 * 24 * 365, 2));
//        result.setSegmentSize(round(totalSizeMB, 2));
//
//        return result;
//    }



    private double round(double value, int places) {
        double scale = Math.pow(10, places);
        return Math.round(value * scale) / scale;
    }
}


