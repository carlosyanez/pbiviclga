source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("echarts4r");
libraryRequireInstall("remotes");
libraryRequireInstall("geojsonsf");
libraryRequireInstall("tidyverse");

####################################################

################### Actual code ####################


#vic_json <- readRDS("./assets/shapes.rds")

vic_map <-
  dataset |>
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
