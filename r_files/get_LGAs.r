### Get Victorian LGAS from aussiemap, convert to geojson and store

library(aussiemaps)
library(geojsonsf)
library(tidyverse)

victoria <- locations.table %>% filter(State=="VIC")

vic <- load_map(victoria,aggregation = "LGA")

vic_json <- sf_geojson(vic)

saveRDS(vic_json,"assets/shapes.rds")

test <- victoria %>% distinct(LGA) %>% mutate(value=row_number())
write_csv(test,"test.csv")
library(echarts4r)

vic_map <-
test |>
e_charts(LGA) |>
  e_map_register("Victoria", vic_json) |>
  e_map(value,map = "Victoria", nameProperty = "LGA") |>
  e_visual_map(value)
