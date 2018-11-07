/*
 * This module hosts the initial data of the mock server.
 * Replace the content of the array "data" with the intended demo data.
 * Replace the value of deferred (non-expanded) navigation properties with the appropriate empty value, also recursively:
 * - for multi-valued propeties: { "results": [] }
 * - for single-valued properties: null
 */
module.exports = {
    data: [
        {
            "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003764')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003764')",
                "type": "API_BUSINESS_PARTNER.A_BusinessPartnerType"
            },
            "BusinessPartner": "1003764",
            "Customer": "",
            "Supplier": "",
            "AcademicTitle": "",
            "AuthorizationGroup": "",
            "BusinessPartnerCategory": "1",
            "BusinessPartnerFullName": "John Doe",
            "BusinessPartnerGrouping": "BP02",
            "BusinessPartnerName": "John Doe",
            "BusinessPartnerUUID": "00163e30-4e2a-1ed8-8483-a08c52249f04",
            "CorrespondenceLanguage": "",
            "CreatedByUser": "CC0000000002",
            "CreationDate": "/Date(1518393600000)/",
            "CreationTime": "PT17H49M05S",
            "FirstName": "John",
            "FormOfAddress": "",
            "Industry": "",
            "InternationalLocationNumber1": "0",
            "InternationalLocationNumber2": "0",
            "IsFemale": false,
            "IsMale": true,
            "IsNaturalPerson": "X",
            "IsSexUnknown": false,
            "Language": "",
            "LastChangeDate": null,
            "LastChangeTime": "PT00H00M00S",
            "LastChangedByUser": "",
            "LastName": "Doe",
            "LegalForm": "",
            "OrganizationBPName1": "",
            "OrganizationBPName2": "",
            "OrganizationBPName3": "",
            "OrganizationBPName4": "",
            "OrganizationFoundationDate": null,
            "OrganizationLiquidationDate": null,
            "SearchTerm1": "Entwickler",
            "AdditionalLastName": "",
            "BirthDate": null,
            "BusinessPartnerIsBlocked": false,
            "BusinessPartnerType": "",
            "ETag": "CC000000000220180212174905",
            "GroupBusinessPartnerName1": "",
            "GroupBusinessPartnerName2": "",
            "IndependentAddressID": "",
            "InternationalLocationNumber3": "0",
            "MiddleName": "doe@company-a.com",
            "NameCountry": "",
            "NameFormat": "",
            "PersonFullName": "",
            "PersonNumber": "28237",
            "IsMarkedForArchiving": false,
            "BusinessPartnerIDByExtSystem": "",
            "YY1_AddrLastCheckedOn_bus": null,
            "YY1_AddrLastCheckedBy_bus": "",
            "to_BuPaIdentification": { "results": [] },
            "to_BusinessPartnerAddress": {
                "results": [
                    {
                        "__metadata": {
                            "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003764',AddressID='28238')",
                            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003764',AddressID='28238')",
                            "type": "API_BUSINESS_PARTNER.A_BusinessPartnerAddressType"
                        },
                        "BusinessPartner": "1003764",
                        "AddressID": "28238",
                        "ValidityStartDate": "/Date(1518393600000+0000)/",
                        "ValidityEndDate": "/Date(253402300799000+0000)/",
                        "AuthorizationGroup": "",
                        "AddressUUID": "00163e30-4e2a-1ed8-8483-a08c5224bf04",
                        "AdditionalStreetPrefixName": "",
                        "AdditionalStreetSuffixName": "",
                        "AddressTimeZone": "CET",
                        "CareOfName": "",
                        "CityCode": "",
                        "CityName": "Walldorf",
                        "CompanyPostalCode": "",
                        "Country": "DE",
                        "County": "",
                        "DeliveryServiceNumber": "",
                        "DeliveryServiceTypeCode": "",
                        "District": "",
                        "FormOfAddress": "",
                        "FullName": "",
                        "HomeCityName": "",
                        "HouseNumber": "16",
                        "HouseNumberSupplementText": "",
                        "Language": "",
                        "POBox": "",
                        "POBoxDeviatingCityName": "",
                        "POBoxDeviatingCountry": "",
                        "POBoxDeviatingRegion": "",
                        "POBoxIsWithoutNumber": false,
                        "POBoxLobbyName": "",
                        "POBoxPostalCode": "",
                        "Person": "28237",
                        "PostalCode": "69190",
                        "PrfrdCommMediumType": "",
                        "Region": "",
                        "StreetName": "Dietmar-Hopp-Allee",
                        "StreetPrefixName": "",
                        "StreetSuffixName": "",
                        "TaxJurisdiction": "",
                        "TransportZone": "",
                        "AddressIDByExternalSystem": "",
                        "to_AddressUsage": { "results": [] },
                        "to_EmailAddress": { "results": [] },
                        "to_FaxNumber": { "results": [] },
                        "to_MobilePhoneNumber": { "results": [] },
                        "to_PhoneNumber": { "results": [] },
                        "to_URLAddress": { "results": [] }
                    }
                ]
            },
            "to_BusinessPartnerBank": { "results": [] },
            "to_BusinessPartnerContact": { "results": [] },
            "to_BusinessPartnerRole": { "results": [] },
            "to_BusinessPartnerTax": { "results": [] },
            "to_Customer": null,
            "to_Supplier": null
        },
        {
            "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003765')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003765')",
                "type": "API_BUSINESS_PARTNER.A_BusinessPartnerType"
            },
            "BusinessPartner": "1003765",
            "Customer": "",
            "Supplier": "",
            "AcademicTitle": "",
            "AuthorizationGroup": "",
            "BusinessPartnerCategory": "1",
            "BusinessPartnerFullName": "Jane Roe",
            "BusinessPartnerGrouping": "BP02",
            "BusinessPartnerName": "Jane Roe",
            "BusinessPartnerUUID": "00163e30-4e2a-1ed8-8483-a0a5f4c2bf04",
            "CorrespondenceLanguage": "",
            "CreatedByUser": "CC0000000002",
            "CreationDate": "/Date(1518393600000)/",
            "CreationTime": "PT17H49M06S",
            "FirstName": "Jane",
            "FormOfAddress": "",
            "Industry": "",
            "InternationalLocationNumber1": "0",
            "InternationalLocationNumber2": "0",
            "IsFemale": true,
            "IsMale": false,
            "IsNaturalPerson": "X",
            "IsSexUnknown": false,
            "Language": "",
            "LastChangeDate": null,
            "LastChangeTime": "PT00H00M00S",
            "LastChangedByUser": "",
            "LastName": "Roe",
            "LegalForm": "",
            "OrganizationBPName1": "",
            "OrganizationBPName2": "",
            "OrganizationBPName3": "",
            "OrganizationBPName4": "",
            "OrganizationFoundationDate": null,
            "OrganizationLiquidationDate": null,
            "SearchTerm1": "Buchhalterin",
            "AdditionalLastName": "",
            "BirthDate": null,
            "BusinessPartnerIsBlocked": false,
            "BusinessPartnerType": "",
            "ETag": "CC000000000220180212174906",
            "GroupBusinessPartnerName1": "",
            "GroupBusinessPartnerName2": "",
            "IndependentAddressID": "",
            "InternationalLocationNumber3": "0",
            "MiddleName": "jane.roe@my-company.com",
            "NameCountry": "",
            "NameFormat": "",
            "PersonFullName": "",
            "PersonNumber": "28240",
            "IsMarkedForArchiving": false,
            "BusinessPartnerIDByExtSystem": "",
            "YY1_AddrLastCheckedOn_bus": null,
            "YY1_AddrLastCheckedBy_bus": "",
            "to_BuPaIdentification": { "results": [] },
            "to_BusinessPartnerAddress": {
                "results": [
                    {
                        "__metadata": {
                            "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003765',AddressID='28241')",
                            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003765',AddressID='28241')",
                            "type": "API_BUSINESS_PARTNER.A_BusinessPartnerAddressType"
                        },
                        "BusinessPartner": "1003765",
                        "AddressID": "28241",
                        "ValidityStartDate": "/Date(1518393600000+0000)/",
                        "ValidityEndDate": "/Date(253402300799000+0000)/",
                        "AuthorizationGroup": "",
                        "AddressUUID": "00163e30-4e2a-1ed8-8483-a0a5f4c2df04",
                        "AdditionalStreetPrefixName": "",
                        "AdditionalStreetSuffixName": "",
                        "AddressTimeZone": "PST",
                        "CareOfName": "",
                        "CityCode": "",
                        "CityName": "Palo Alto",
                        "CompanyPostalCode": "",
                        "Country": "US",
                        "County": "",
                        "DeliveryServiceNumber": "",
                        "DeliveryServiceTypeCode": "",
                        "District": "",
                        "FormOfAddress": "",
                        "FullName": "",
                        "HomeCityName": "",
                        "HouseNumber": "3410",
                        "HouseNumberSupplementText": "",
                        "Language": "",
                        "POBox": "",
                        "POBoxDeviatingCityName": "",
                        "POBoxDeviatingCountry": "",
                        "POBoxDeviatingRegion": "",
                        "POBoxIsWithoutNumber": false,
                        "POBoxLobbyName": "",
                        "POBoxPostalCode": "",
                        "Person": "28240",
                        "PostalCode": "CA 94304",
                        "PrfrdCommMediumType": "",
                        "Region": "",
                        "StreetName": "Hillview Avenue",
                        "StreetPrefixName": "",
                        "StreetSuffixName": "",
                        "TaxJurisdiction": "",
                        "TransportZone": "",
                        "AddressIDByExternalSystem": "",
                        "to_AddressUsage": { "results": [] },
                        "to_EmailAddress": { "results": [] },
                        "to_FaxNumber": { "results": [] },
                        "to_MobilePhoneNumber": { "results": [] },
                        "to_PhoneNumber": { "results": [] },
                        "to_URLAddress": { "results": [] }
                    }
                ]
            },
            "to_BusinessPartnerBank": { "results": [] },
            "to_BusinessPartnerContact": { "results": [] },
            "to_BusinessPartnerRole": { "results": [] },
            "to_BusinessPartnerTax": { "results": [] },
            "to_Customer": null,
            "to_Supplier": null
        },
        {
            "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003766')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003766')",
                "type": "API_BUSINESS_PARTNER.A_BusinessPartnerType"
            },
            "BusinessPartner": "1003766",
            "Customer": "",
            "Supplier": "",
            "AcademicTitle": "",
            "AuthorizationGroup": "",
            "BusinessPartnerCategory": "1",
            "BusinessPartnerFullName": "John Smith",
            "BusinessPartnerGrouping": "BP02",
            "BusinessPartnerName": "John Smith",
            "BusinessPartnerUUID": "00163e30-4e2a-1ed8-8483-a0b2387e1f04",
            "CorrespondenceLanguage": "",
            "CreatedByUser": "CC0000000002",
            "CreationDate": "/Date(1518393600000)/",
            "CreationTime": "PT17H49M07S",
            "FirstName": "John",
            "FormOfAddress": "",
            "Industry": "",
            "InternationalLocationNumber1": "0",
            "InternationalLocationNumber2": "0",
            "IsFemale": false,
            "IsMale": true,
            "IsNaturalPerson": "X",
            "IsSexUnknown": false,
            "Language": "",
            "LastChangeDate": null,
            "LastChangeTime": "PT00H00M00S",
            "LastChangedByUser": "",
            "LastName": "Smith",
            "LegalForm": "",
            "OrganizationBPName1": "",
            "OrganizationBPName2": "",
            "OrganizationBPName3": "",
            "OrganizationBPName4": "",
            "OrganizationFoundationDate": null,
            "OrganizationLiquidationDate": null,
            "SearchTerm1": "Abogado",
            "AdditionalLastName": "",
            "BirthDate": null,
            "BusinessPartnerIsBlocked": false,
            "BusinessPartnerType": "",
            "ETag": "CC000000000220180212174907",
            "GroupBusinessPartnerName1": "",
            "GroupBusinessPartnerName2": "",
            "IndependentAddressID": "",
            "InternationalLocationNumber3": "0",
            "MiddleName": "j.smith02@firma-a.de",
            "NameCountry": "",
            "NameFormat": "",
            "PersonFullName": "",
            "PersonNumber": "28243",
            "IsMarkedForArchiving": false,
            "BusinessPartnerIDByExtSystem": "",
            "YY1_AddrLastCheckedOn_bus": null,
            "YY1_AddrLastCheckedBy_bus": "",
            "to_BuPaIdentification": { "results": [] },
            "to_BusinessPartnerAddress": {
                "results": [
                    {
                        "__metadata": {
                            "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003766',AddressID='28244')",
                            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003766',AddressID='28244')",
                            "type": "API_BUSINESS_PARTNER.A_BusinessPartnerAddressType"
                        },
                        "BusinessPartner": "1003766",
                        "AddressID": "28244",
                        "ValidityStartDate": "/Date(1518393600000+0000)/",
                        "ValidityEndDate": "/Date(253402300799000+0000)/",
                        "AuthorizationGroup": "",
                        "AddressUUID": "00163e30-4e2a-1ed8-8483-a0b2387e3f04",
                        "AdditionalStreetPrefixName": "",
                        "AdditionalStreetSuffixName": "",
                        "AddressTimeZone": "CET",
                        "CareOfName": "",
                        "CityCode": "",
                        "CityName": "Hallbergmoos",
                        "CompanyPostalCode": "",
                        "Country": "DE",
                        "County": "",
                        "DeliveryServiceNumber": "",
                        "DeliveryServiceTypeCode": "",
                        "District": "",
                        "FormOfAddress": "",
                        "FullName": "",
                        "HomeCityName": "",
                        "HouseNumber": "2",
                        "HouseNumberSupplementText": "",
                        "Language": "",
                        "POBox": "",
                        "POBoxDeviatingCityName": "",
                        "POBoxDeviatingCountry": "",
                        "POBoxDeviatingRegion": "",
                        "POBoxIsWithoutNumber": false,
                        "POBoxLobbyName": "",
                        "POBoxPostalCode": "",
                        "Person": "28243",
                        "PostalCode": "85399",
                        "PrfrdCommMediumType": "",
                        "Region": "",
                        "StreetName": "Zeppelinstraße",
                        "StreetPrefixName": "",
                        "StreetSuffixName": "",
                        "TaxJurisdiction": "",
                        "TransportZone": "",
                        "AddressIDByExternalSystem": "",
                        "to_AddressUsage": { "results": [] },
                        "to_EmailAddress": { "results": [] },
                        "to_FaxNumber": { "results": [] },
                        "to_MobilePhoneNumber": { "results": [] },
                        "to_PhoneNumber": { "results": [] },
                        "to_URLAddress": { "results": [] }
                    }
                ]
            },
            "to_BusinessPartnerBank": { "results": [] },
            "to_BusinessPartnerContact": { "results": [] },
            "to_BusinessPartnerRole": { "results": [] },
            "to_BusinessPartnerTax": { "results": [] },
            "to_Customer": null,
            "to_Supplier": null
        },
        {
            "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003767')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003767')",
                "type": "API_BUSINESS_PARTNER.A_BusinessPartnerType"
            },
            "BusinessPartner": "1003767",
            "Customer": "",
            "Supplier": "",
            "AcademicTitle": "",
            "AuthorizationGroup": "",
            "BusinessPartnerCategory": "1",
            "BusinessPartnerFullName": "Carla Coe",
            "BusinessPartnerGrouping": "BP02",
            "BusinessPartnerName": "Carla Coe",
            "BusinessPartnerUUID": "00163e30-4e2a-1ed8-8483-a0c9ef089f04",
            "CorrespondenceLanguage": "",
            "CreatedByUser": "CC0000000002",
            "CreationDate": "/Date(1518393600000)/",
            "CreationTime": "PT17H49M08S",
            "FirstName": "Carla",
            "FormOfAddress": "",
            "Industry": "",
            "InternationalLocationNumber1": "0",
            "InternationalLocationNumber2": "0",
            "IsFemale": true,
            "IsMale": false,
            "IsNaturalPerson": "X",
            "IsSexUnknown": false,
            "Language": "",
            "LastChangeDate": "/Date(1519084800000)/",
            "LastChangeTime": "PT12H30M13S",
            "LastChangedByUser": "CC0000000002",
            "LastName": "Coe",
            "LegalForm": "",
            "OrganizationBPName1": "",
            "OrganizationBPName2": "",
            "OrganizationBPName3": "",
            "OrganizationBPName4": "",
            "OrganizationFoundationDate": null,
            "OrganizationLiquidationDate": null,
            "SearchTerm1": "Geschäftsführerin",
            "AdditionalLastName": "",
            "BirthDate": null,
            "BusinessPartnerIsBlocked": false,
            "BusinessPartnerType": "",
            "ETag": "CC000000000220180220123013",
            "GroupBusinessPartnerName1": "",
            "GroupBusinessPartnerName2": "",
            "IndependentAddressID": "",
            "InternationalLocationNumber3": "0",
            "MiddleName": "carla.c@sap.com",
            "NameCountry": "",
            "NameFormat": "",
            "PersonFullName": "",
            "PersonNumber": "28246",
            "IsMarkedForArchiving": false,
            "BusinessPartnerIDByExtSystem": "",
            "YY1_AddrLastCheckedOn_bus": null,
            "YY1_AddrLastCheckedBy_bus": "",
            "to_BuPaIdentification": { "results": [] },
            "to_BusinessPartnerAddress": {
                "results": [
                    {
                        "__metadata": {
                            "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003767',AddressID='28247')",
                            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress(BusinessPartner='1003767',AddressID='28247')",
                            "type": "API_BUSINESS_PARTNER.A_BusinessPartnerAddressType"
                        },
                        "BusinessPartner": "1003767",
                        "AddressID": "28247",
                        "ValidityStartDate": "/Date(1518393600000+0000)/",
                        "ValidityEndDate": "/Date(253402300799000+0000)/",
                        "AuthorizationGroup": "",
                        "AddressUUID": "00163e30-4e2a-1ed8-8483-a0c9ef08bf04",
                        "AdditionalStreetPrefixName": "",
                        "AdditionalStreetSuffixName": "",
                        "AddressTimeZone": "CET",
                        "CareOfName": "",
                        "CityCode": "",
                        "CityName": "Potsdam",
                        "CompanyPostalCode": "",
                        "Country": "DE",
                        "County": "",
                        "DeliveryServiceNumber": "",
                        "DeliveryServiceTypeCode": "",
                        "District": "",
                        "FormOfAddress": "",
                        "FullName": "",
                        "HomeCityName": "",
                        "HouseNumber": "10",
                        "HouseNumberSupplementText": "",
                        "Language": "",
                        "POBox": "",
                        "POBoxDeviatingCityName": "",
                        "POBoxDeviatingCountry": "",
                        "POBoxDeviatingRegion": "",
                        "POBoxIsWithoutNumber": false,
                        "POBoxLobbyName": "",
                        "POBoxPostalCode": "",
                        "Person": "28246",
                        "PostalCode": "14469",
                        "PrfrdCommMediumType": "",
                        "Region": "",
                        "StreetName": "Konrad-Zuse-Ring",
                        "StreetPrefixName": "",
                        "StreetSuffixName": "",
                        "TaxJurisdiction": "",
                        "TransportZone": "",
                        "AddressIDByExternalSystem": "",
                        "to_AddressUsage": { "results": [] },
                        "to_EmailAddress": { "results": [] },
                        "to_FaxNumber": { "results": [] },
                        "to_MobilePhoneNumber": { "results": [] },
                        "to_PhoneNumber": { "results": [] },
                        "to_URLAddress": { "results": [] }
                    }
                ]
            },
            "to_BusinessPartnerBank": { "results": [] },
            "to_BusinessPartnerContact": { "results": [] },
            "to_BusinessPartnerRole": { "results": [] },
            "to_BusinessPartnerTax": { "results": [] },
            "to_Customer": null,
            "to_Supplier": null
        },
        {
            "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003768')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('1003768')",
                "type": "API_BUSINESS_PARTNER.A_BusinessPartnerType"
            },
            "BusinessPartner": "1003768",
            "Customer": "",
            "Supplier": "",
            "AcademicTitle": "",
            "AuthorizationGroup": "",
            "BusinessPartnerCategory": "2",
            "BusinessPartnerFullName": "Sample Company Ltd",
            "BusinessPartnerGrouping": "BP02",
            "BusinessPartnerName": "Sample Company Ltd",
            "BusinessPartnerUUID": "00163e30-4e2a-1ed8-8483-a0c9ef089f05",
            "CorrespondenceLanguage": "",
            "CreatedByUser": "CC0000000002",
            "CreationDate": "/Date(1518393600000)/",
            "CreationTime": "PT17H49M08S",
            "FirstName": "",
            "FormOfAddress": "",
            "Industry": "",
            "InternationalLocationNumber1": "0",
            "InternationalLocationNumber2": "0",
            "IsFemale": false,
            "IsMale": false,
            "IsNaturalPerson": "",
            "IsSexUnknown": false,
            "Language": "",
            "LastChangeDate": "/Date(1519084800000)/",
            "LastChangeTime": "PT12H30M13S",
            "LastChangedByUser": "CC0000000002",
            "LastName": "",
            "LegalForm": "",
            "OrganizationBPName1": "Sample Company Ltd",
            "OrganizationBPName2": "",
            "OrganizationBPName3": "",
            "OrganizationBPName4": "",
            "OrganizationFoundationDate": null,
            "OrganizationLiquidationDate": null,
            "SearchTerm1": "",
            "AdditionalLastName": "",
            "BirthDate": null,
            "BusinessPartnerIsBlocked": false,
            "BusinessPartnerType": "",
            "ETag": "CC000000000220180220123013",
            "GroupBusinessPartnerName1": "",
            "GroupBusinessPartnerName2": "",
            "IndependentAddressID": "",
            "InternationalLocationNumber3": "0",
            "MiddleName": "info@sample-company.co.uk",
            "NameCountry": "",
            "NameFormat": "",
            "PersonFullName": "",
            "PersonNumber": "",
            "IsMarkedForArchiving": false,
            "BusinessPartnerIDByExtSystem": "",
            "YY1_AddrLastCheckedOn_bus": null,
            "YY1_AddrLastCheckedBy_bus": "",
            "to_BuPaIdentification": { "results": [] },
            "to_BusinessPartnerAddress": { "results": [] },
            "to_BusinessPartnerBank": { "results": [] },
            "to_BusinessPartnerContact": { "results": [] },
            "to_BusinessPartnerRole": { "results": [] },
            "to_BusinessPartnerTax": { "results": [] },
            "to_Customer": null,
            "to_Supplier": null
        }
    ]
};