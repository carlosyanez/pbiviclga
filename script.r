source('./r_files/flatten_HTML.r')

if(!require('just.install')){ install.packages('just.install', repos='http://cran.r-project.org' ,lib=.libPaths()) }
if(!require('tibble')){ install.packages('tibble', repos='http://cran.r-project.org' ,lib=.libPaths()) }


just.install::justinstall(tibble::tribble(~package,       ~source,~url,
                                          "echarts4r",    "cran","",    
                                          "jsonlite",     "cran","",
                                          "dplyr",        "cran","",    
                                          "geojsonsf",    "cran","",
                                          "fs",           "cran","",
                                          "geojsonR" ,    "cran",""
))


############### Library Declarations ###############
libraryRequireInstall("echarts4r");
libraryRequireInstall("jsonlite");
libraryRequireInstall("tibble");
libraryRequireInstall("dplyr");
libraryRequireInstall("geojsonsf");
libraryRequireInstall("fs");

####################################################
################### Actual code ####################


dataset <- data.frame(LGA,Value)
names(dataset) <- c("LGA","Value")

shape_file <- !file_exists("./shapes.rds")

if(shape_file){
  download.file("https://github.com/carlosyanez/pbiviclga/raw/main/assets/shapes.rds","./shapes.rds")
}


vic_json <- readRDS("./shapes.rds")

LGAs <- geojson_sf(vic_json) |> select(LGA)
dataset <- left_join(LGAs,dataset,by="LGA")

showLegend <- TRUE
if(exists("settings_ShowLegend")){
  showLegend = settings_ShowLegend
}

bottomColour <- "#FFFFCC"
if(exists("settings_bottomColour")){
  bottomColour = as.character(settings_bottomColour)
}

middleColour <- NULL
if(exists("settings_middleColour")){
  middleColour = as.character(settings_middleColour)
}

topColour <- "#C90000"
if(exists("settings_topColour")){
  topColour = as.character(settings_topColour)
}

if(is.null(middleColour)){
  colour_palette <- c(bottomColour,topColour)
}else{
  colour_palette <- c(bottomColour,middleColour,topColour)
}

message(showLegend)
message(colour_palette)
message(shape_file)


vic_map <- dataset |>
  e_charts(LGA) |>
  e_map_register("Victoria", vic_json) |>
  e_map(Value,map = "Victoria", nameProperty = "LGA") |>
  e_visual_map(Value,show=showLegend,
               inRange=list(color=colour_palette)) 
  

####################################################

############# Create and save widget ###############
internalSaveWidget(vic_map, 'out.html');
####################################################

################ Reduce paddings ###################
ReadFullFileReplaceString('out.html', 'out.html', ',"padding":[0-9]*,', ',"padding":0,')
####################################################
