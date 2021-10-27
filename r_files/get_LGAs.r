### Get Victorian LGAS from aussiemap, convert to geojson and store

library(aussiemaps)
library(geojsonsf)
library(tidyverse)
library(geojsonio)
library(rmapshaper)
library(sf)
victoria <- locations.table %>% filter(State=="VIC")

vic <- load_map(victoria,aggregation = "LGA")

vic2 <- rmapshaper::ms_simplify(input = as(vic, 'Spatial')) %>%
        st_as_sf()
vic_json <- sf_geojson(vic2)

saveRDS(vic_json,"assets/shapes.rds")
#i geojsonio::geojson_write(vic_json, file = "assets/shapes.geojson")

test <- victoria %>% distinct(LGA) %>% mutate(value=row_number())

#write_csv(test,"test.csv")

