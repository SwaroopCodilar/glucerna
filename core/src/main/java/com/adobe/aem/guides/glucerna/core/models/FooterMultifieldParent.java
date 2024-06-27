package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FooterMultifieldParent {
    @ChildResource
    List<FooterFields> fields1;

    @ChildResource
    List<FooterFields> fields2;

    @ChildResource
    List<FooterFields> fields3;

    @ChildResource
    List<FooterFields> fields4;

    @ChildResource
    List<FooterFields> fields5;

    @ValueMapValue
    private String title1;

    @ValueMapValue
    private String title3;

    @ValueMapValue
    private String title4;


    public String getTitle1() {
        return title1;
    }
    public String getTitle4() {
        return title4;
    }
    public String getTitle3() {
        return title3;
    }

    public List<FooterFields> getFields1() {
        return fields1;
    }

    public List<FooterFields> getFields2() {
        return fields2;
    }

    public List<FooterFields> getFields3() {
        return fields3;
    }

    public List<FooterFields> getFields4() {
        return fields4;
    }

    public List<FooterFields> getFields5() {
        return fields5;
    }
}
