package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class BannerDescription {

    @ValueMapValue
    private String logoReference;

    @ValueMapValue
    private String titledetails;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String discountdescription;

    @ValueMapValue
    private String buttontext;

    @ValueMapValue
    private String backgroundimage;

    public String getLogoReference() {
        return logoReference;
    }

    public String getTitledetails() {
        return titledetails;
    }

    public String getDescription() {
        return description;
    }

    public String getDiscountdescription() {
        return discountdescription;
    }

    public String getButtontext() {
        return buttontext;
    }

    public String getBackgroundimage() {
        return backgroundimage;
    }

}
