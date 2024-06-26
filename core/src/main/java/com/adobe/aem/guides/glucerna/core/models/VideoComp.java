package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VideoComp {
    @ValueMapValue
    private String path;

    public String getPath() {
        return path;
    }

    @ValueMapValue
    private String damVideoPath;

    public String getDamVideoPath() {
        return damVideoPath;
    }

    @ValueMapValue
    private String youtubeUrl;

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    @ValueMapValue
    private String brightcovePath;

    public String getBrightcovePath(){
        return brightcovePath;
    }

}
