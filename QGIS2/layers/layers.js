var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_QHasil2004_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Q= Hasil 2004<br />\
    <img src="styles/legend/QHasil2004_1_0.png" /> 1697002,5446<br />\
    <img src="styles/legend/QHasil2004_1_1.png" /> 4070557,9808<br />\
    <img src="styles/legend/QHasil2004_1_2.png" /> 6444113,4170<br />\
    <img src="styles/legend/QHasil2004_1_3.png" /> 8817668,8532<br />\
    <img src="styles/legend/QHasil2004_1_4.png" /> 11191224,2894<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/QHasil2004_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.712142, 45112.791643, 11461036.068800, 137119.633376]
        })
    });
var lyr_QHasil2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Q= Hasil 2024<br />\
    <img src="styles/legend/QHasil2024_2_0.png" /> 1300240,6511<br />\
    <img src="styles/legend/QHasil2024_2_1.png" /> 4264729,8794<br />\
    <img src="styles/legend/QHasil2024_2_2.png" /> 7229219,1077<br />\
    <img src="styles/legend/QHasil2024_2_3.png" /> 10193708,3360<br />\
    <img src="styles/legend/QHasil2024_2_4.png" /> 13158197,5644<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/QHasil2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11241094.711824, 45111.481105, 11461049.826183, 137119.633376]
        })
    });

        var lyr_GoogleLabels_3 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_batasadministrasikabsiakreprojected_4 = new ol.format.GeoJSON();
var features_batasadministrasikabsiakreprojected_4 = format_batasadministrasikabsiakreprojected_4.readFeatures(json_batasadministrasikabsiakreprojected_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasadministrasikabsiakreprojected_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasadministrasikabsiakreprojected_4.addFeatures(features_batasadministrasikabsiakreprojected_4);
var lyr_batasadministrasikabsiakreprojected_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasadministrasikabsiakreprojected_4, 
                style: style_batasadministrasikabsiakreprojected_4,
                popuplayertitle: 'batas administrasi kab siak — reprojected',
                interactive: true,
                title: '<img src="styles/legend/batasadministrasikabsiakreprojected_4.png" /> batas administrasi kab siak — reprojected'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_QHasil2024_2,],
                                fold: 'open',
                                title: '2024'});
var group_2004 = new ol.layer.Group({
                                layers: [lyr_QHasil2004_1,],
                                fold: 'open',
                                title: '2004'});

lyr_ESRISatellite_0.setVisible(true);lyr_QHasil2004_1.setVisible(true);lyr_QHasil2024_2.setVisible(true);lyr_GoogleLabels_3.setVisible(true);lyr_batasadministrasikabsiakreprojected_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_2004,group_2024,lyr_GoogleLabels_3,lyr_batasadministrasikabsiakreprojected_4];
lyr_batasadministrasikabsiakreprojected_4.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_batasadministrasikabsiakreprojected_4.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_batasadministrasikabsiakreprojected_4.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_batasadministrasikabsiakreprojected_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});