
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Bike_Network_1": {
            "type": "geojson",
            "data": json_Bike_Network_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Bike_Network_1_0",
            "type": "line",
            "source": "Bike_Network_1",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Contraflow'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Conventional'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Paint Buffered'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Separated Bike Lane'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Sharrow'], 1.6428571428571428, ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], 1.6428571428571428, 1.6428571428571428], 'line-opacity': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Contraflow'], 1.0, ['==', ['get', 'TYPE'], 'Conventional'], 1.0, ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], 1.0, ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Paint Buffered'], 1.0, ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], 1.0, ['==', ['get', 'TYPE'], 'Separated Bike Lane'], 1.0, ['==', ['get', 'TYPE'], 'Sharrow'], 1.0, ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'TYPE'], 'Bus Bike Lane'], '#38d479', ['==', ['get', 'TYPE'], 'Contraflow'], '#6b82e9', ['==', ['get', 'TYPE'], 'Conventional'], '#6434dd', ['==', ['get', 'TYPE'], 'Conventional & Dashed Bike Lane'], '#19eed5', ['==', ['get', 'TYPE'], 'Conventional w Sharrows'], '#dd7163', ['==', ['get', 'TYPE'], 'Dashed Bike Lane'], '#eea641', ['==', ['get', 'TYPE'], 'One Way Separated Bike Lane'], '#7ae40f', ['==', ['get', 'TYPE'], 'Paint Buffered'], '#d6db3f', ['==', ['get', 'TYPE'], 'Paint Buffered w Conventional'], '#dc608b', ['==', ['get', 'TYPE'], 'Separated Bike Lane'], '#5cb4e4', ['==', ['get', 'TYPE'], 'Sharrow'], '#e044c1', ['==', ['get', 'TYPE'], 'Two Way Separated Bike Lane'], '#82eb7c', '#a50edc']}
        }
],
}