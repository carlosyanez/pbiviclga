source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("echarts4r");
libraryRequireInstall("jsonlite");
libraryRequireInstall("tibble");
libraryRequireInstall("dplyr");
libraryRequireInstall("geojsonsf");
####################################################

################### Actual code ####################


#vic_json <- readRDS("./assets/shapes.rds")
#vic_json <- geojson_read("./assets/shapes.geojson")

download.file("https://github.com/carlosyanez/pbiviclga/raw/main/assets/shapes.rds","shapes.rds")
vic_json <- readRDS("shapes.rds")

LGAs <- geojson_sf(vic_json) |> select(LGA)

dataset <- left_join(LGAs,dataset,by="LGA")

vic_map <- dataset |>
  e_charts(LGA) |>
  e_map_register("Victoria", vic_json) |>
  e_map(value,map = "Victoria", nameProperty = "LGA") |>
  e_visual_map(value) 

####################################################

############# Create and save widget ###############
internalSaveWidget(vic_map, 'out.html');
####################################################

################ Reduce paddings ###################
ReadFullFileReplaceString('out.html', 'out.html', ',"padding":[0-9]*,', ',"padding":0,')
####################################################
