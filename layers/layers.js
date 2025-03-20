var wms_layers = [];

var lyr_TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TSS Breeding Population - Future (RASTER - Reprojected EPSG 3857)<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_0.png" /> 0.0000<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_1.png" /> 0.0175<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_2.png" /> 0.0351<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_3.png" /> 0.0526<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_4.png" /> 0.0702<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_5.png" /> 0.0877<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_6.png" /> 0.1053<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_7.png" /> 0.1228<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_8.png" /> 0.1404<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_9.png" /> 0.1579<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_10.png" /> 0.1755<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_11.png" /> 0.1930<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_12.png" /> 0.2106<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_13.png" /> 0.2281<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_14.png" /> 0.2457<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_15.png" /> 0.2632<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_16.png" /> 0.2808<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_17.png" /> 0.2983<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_18.png" /> 0.3159<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_19.png" /> 0.3334<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_20.png" /> 0.3510<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_21.png" /> 0.3685<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_22.png" /> 0.3861<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_23.png" /> 0.4036<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_24.png" /> 0.4212<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_25.png" /> 0.4387<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_26.png" /> 0.4563<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_27.png" /> 0.4738<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_28.png" /> 0.4914<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_29.png" /> 0.5089<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_30.png" /> 0.5265<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_31.png" /> 0.5440<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_32.png" /> 0.5616<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_33.png" /> 0.5791<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_34.png" /> 0.5967<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_35.png" /> 0.6142<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_36.png" /> 0.6318<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_37.png" /> 0.6493<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_38.png" /> 0.6669<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_39.png" /> 0.6844<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_40.png" /> 0.7020<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_41.png" /> 0.7195<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_42.png" /> 0.7371<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_43.png" /> 0.7546<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_44.png" /> 0.7722<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_45.png" /> 0.7897<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_46.png" /> 0.8072<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_47.png" /> 0.8248<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_48.png" /> 0.8423<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_49.png" /> 0.8599<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_50.png" /> 0.8774<br />\
    <img src="styles/legend/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0_51.png" /> 0.8950<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342800, -20037508.342800, 20037508.342800, 20037508.342800]
        })
    });
var format_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1 = new ol.format.GeoJSON();
var features_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1 = format_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.readFeatures(json_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.addFeatures(features_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1);
var lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1, 
                style: style_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1,
                popuplayertitle: 'TSS Breeding Population - Future (VECTOR - BINARY, CLEAN)',
                interactive: true,
                title: '<img src="styles/legend/TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.png" /> TSS Breeding Population - Future (VECTOR - BINARY, CLEAN)'
            });
var format_CountryOutlineWhite_2 = new ol.format.GeoJSON();
var features_CountryOutlineWhite_2 = format_CountryOutlineWhite_2.readFeatures(json_CountryOutlineWhite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineWhite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineWhite_2.addFeatures(features_CountryOutlineWhite_2);
var lyr_CountryOutlineWhite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineWhite_2, 
                style: style_CountryOutlineWhite_2,
                popuplayertitle: 'Country Outline - White',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineWhite_2.png" /> Country Outline - White'
            });

lyr_TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0.setVisible(true);lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.setVisible(true);lyr_CountryOutlineWhite_2.setVisible(true);
var layersList = [lyr_TSSBreedingPopulationFutureRASTERReprojectedEPSG3857_0,lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1,lyr_CountryOutlineWhite_2];
lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.set('fieldAliases', {'DN': 'DN', });
lyr_CountryOutlineWhite_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.set('fieldImages', {'DN': 'Range', });
lyr_CountryOutlineWhite_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_TSSBreedingPopulationFutureVECTORBINARYCLEAN_1.set('fieldLabels', {'DN': 'no label', });
lyr_CountryOutlineWhite_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineWhite_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});