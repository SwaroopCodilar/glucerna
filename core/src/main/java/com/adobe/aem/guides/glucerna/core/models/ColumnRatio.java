package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.ArrayList;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ColumnRatio {

    @ValueMapValue(name = "parsys")
    private String columnRatio;

    public String getColumnRatio() {
        return columnRatio != null ? columnRatio : "6:6"; // Default to 6:6 if no ratio is provided
    }

    public List<Integer> getColumnRatios() {
        List<Integer> ratios = new ArrayList<>();
        String[] ratioArray = getColumnRatio().split(":");
        for (String ratio : ratioArray) {
            try {
                ratios.add(Integer.parseInt(ratio.trim()));
            } catch (NumberFormatException e) {
                ratios.add(6); // Default to 6 if parsing fails
            }
        }
        return ratios;
    }
}
