package com.cognizant.RestCountryCode.service;


import com.cognizant.RestCountryCode.model.Country;
import com.cognizant.RestCountryCode.model.CountryList;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) {
        try {
            InputStream is = getClass().getClassLoader().getResourceAsStream("country.xml");
            JAXBContext context = JAXBContext.newInstance(CountryList.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            CountryList countryList = (CountryList) unmarshaller.unmarshal(is);
            List<Country> countries = countryList.getCountries();

            return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        } catch (Exception e) {
            throw new RuntimeException("Error reading country.xml", e);
        }
    }
}
