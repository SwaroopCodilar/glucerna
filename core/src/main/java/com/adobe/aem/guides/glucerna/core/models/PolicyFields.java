package com.adobe.aem.guides.glucerna.core.models;

import jdk.nashorn.internal.objects.annotations.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PolicyFields {

    @ValueMapValue
    private String policyContent;

    public String getPolicyContent() {
        return policyContent;
    }
}
