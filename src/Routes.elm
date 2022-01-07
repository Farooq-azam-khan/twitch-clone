module Routes exposing (..)

import Url
import Url.Parser exposing ((</>), Parser, map, oneOf, string, top)


type Route
    = HomeR
    | StreamR String
    | ErrorR


routeParser : Parser (Route -> a) a
routeParser =
    oneOf
        [ map HomeR top
        , map StreamR string
        ]


parse_route_url : Url.Url -> Route
parse_route_url url =
    Maybe.withDefault ErrorR <| Url.Parser.parse routeParser url
