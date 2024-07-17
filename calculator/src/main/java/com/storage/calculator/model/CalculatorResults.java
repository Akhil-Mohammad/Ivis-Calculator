package com.storage.calculator.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CalculatorResults {

    private double fileSizeMinute;
    private double storageHour;
    private double storageDay;
    private double storageQuarter;
    private double storageYear;
    private double segmentSize;
}
