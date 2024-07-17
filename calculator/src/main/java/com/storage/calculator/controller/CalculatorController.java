package com.storage.calculator.controller;

import com.storage.calculator.model.BandwidthModel;
import com.storage.calculator.model.CalculateOnBitrate;
import com.storage.calculator.model.CalculatorResults;
import com.storage.calculator.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculatorController {


    @Autowired
    private CalculatorService calculatorService;

    @PostMapping("/calculateOnSize")
    public CalculatorResults calculateOnSize(@RequestParam int segmentTime, @RequestParam double segmentSize) {
        return calculatorService.calculateBasedOnSize(segmentTime, segmentSize);
    }

    @PostMapping("/calculateOnBitrate")
    public CalculatorResults calculateOnBitrate(@RequestParam int avgVideoBitrate, @RequestParam int maxVideoBitrate,
                                                @RequestParam int audioBitrate, @RequestParam int crf,
                                                  @RequestParam int segmentTime) {
        return calculatorService.calculateBasedOnBitrate(avgVideoBitrate, maxVideoBitrate, audioBitrate, crf, segmentTime);
    }

    @PostMapping("/calculateStorageAndBandwidth")
    public BandwidthModel calculateStorageAndBandwidth(@RequestParam int numCameras, @RequestParam int bitrateKbps) {
        return calculatorService.calculateStorageAndBandwidth(numCameras, bitrateKbps);
    }
}


