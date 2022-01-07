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


profileImage : String -> Html msg
profileImage class_name =
    img
        [ class class_name
        , alt "profile"
        , src "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-70x70.png"
        ]
        []
