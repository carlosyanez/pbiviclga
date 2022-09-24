# Power BI Custom Visual : Interactived Map of Victorian LGAs



Simple custom Power Bi visual, displaying map with Local Government Areas in Victoria, Australia.

Visual built on R, using the following packages:

* [echarts4r](https://echarts4r.john-coene.com/) for charting
* [aussiemaps](https://carlosyanez.github.io/aussiemaps/) for the map data.


![](example/example.png)

# How to use

You can download the pbiviz file [here](https://github.com/carlosyanez/pbiviclga/blob/main/dist/viclgaC488769D20414D169E26B0832E038E99.1.0.1.pbiviz).

# Disclaimer, this can be done in Power BI natively!

Please note that this map can be loaded into Power BI using the **Shape map** pre-built visual ([here](https://learn.microsoft.com/en-us/power-bi/visuals/desktop-shape-map), chec customs map seciton). You can find the topojson file [here](https://github.com/carlosyanez/pbiviclga/blob/main/assets/vic_lga_topo.json).
