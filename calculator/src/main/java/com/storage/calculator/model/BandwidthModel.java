package com.storage.calculator.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BandwidthModel {

    private double storagePerDayPerCamera;
    private double storagePerHourPerCamera;
    private double totalStorageForOneCameraOver30Days;
    private double bandwidthForOneCamera;
    private String bandwidthMbps;
    private String bandwidthGbps;

}
