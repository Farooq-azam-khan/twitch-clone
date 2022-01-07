module Assets exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


twitchLogo : Html msg
twitchLogo =
    img
        [ class "h-6 w-6"
        , src
            "https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png"
        , alt
            "twitch logo"
        ]
        []
