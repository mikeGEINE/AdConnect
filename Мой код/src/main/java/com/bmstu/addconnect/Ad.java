package com.bmstu.addconnect;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ad {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ad_id;
    private String headline;
    private Integer coast;
    private String description;
    private String contacts;
    private String audience;
    private String format;
    private String platform;

    public Integer getAd_id() {
        return ad_id;
    }
    public void setAd_id(Integer ad_id) {
        this.ad_id = ad_id;
    }

    public String getHeadline() {
        return headline;
    }
    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public Integer getCoast() {
        return coast;
    }
    public void setCoast(Integer coast) {
        this.coast = coast;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getContacts() {
        return contacts;
    }
    public void setContacts(String contacts) {
        this.contacts = contacts;
    }

    public String getAudience() {
        return audience;
    }
    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getFormat() {
        return format;
    }
    public void setFormat(String format) {
        this.format = format;
    }

    public String getPlatform() {
        return platform;
    }
    public void setPlatform(String platform) {
        this.platform = platform;
    }
}
