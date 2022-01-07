module Assets exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Svg as Svg
import Svg.Attributes as SvgAttr


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


offline_icon : String -> Html msg
offline_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name
        , SvgAttr.viewBox "0 0 24 24"
        , attribute "strokewidth" "2"
        , SvgAttr.stroke "none"
        , SvgAttr.fill "currentColor"
        ]
        [ Svg.circle
            [ SvgAttr.cx "12"
            , SvgAttr.cy "12"
            , SvgAttr.r "10"
            ]
            []
        ]


online_icon : String -> Html msg
online_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name
        , SvgAttr.viewBox "0 0 24 24"
        , attribute "strokewidth" "2"
        , SvgAttr.stroke "none"
        , SvgAttr.fill "red"
        ]
        [ Svg.circle
            [ SvgAttr.cx "12"
            , SvgAttr.cy "12"
            , SvgAttr.r "10"
            ]
            []
        ]


sample_channel_image : String
sample_channel_image =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/cd921fcd-53fc-4b1d-be23-0787bc36b756-profile_image-70x70.png"


justChatting_image : String
justChatting_image =
    "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg"


livePill : Html msg
livePill =
    div
        [ class "bg-red-700 rounded-lg px-2 py-1 text-xs leading-none" ]
        [ text "LIVE" ]


type alias Streamer =
    { id : String
    , username : String
    , category : String
    , imgUrl : String
    , isLive : Bool
    , views : String
    }


followingChannels : List Streamer
followingChannels =
    [ { id = "1"
      , username = "GMHikaru"
      , category = "Chess"
      , imgUrl = sample_channel_image
      , isLive = True
      , views = "1M"
      }
    , { id = "2"
      , username = "Nym"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , isLive = False
      , views = "1M"
      }
    , { id = "4"
      , username = "Chess"
      , category = "Chess"
      , imgUrl = sample_channel_image
      , isLive = False
      , views = "1M"
      }
    ]


popularChannels : List Streamer
popularChannels =
    [ { username = "GMHikaru"
      , id = "1"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , views = "1M"
      , isLive = True
      }
    , { username = "GMHikaru"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , id = "2"
      , views = "1M"
      , isLive = True
      }
    , { username = "GMHikaru"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , id = "3"
      , views = "1M"
      , isLive = True
      }
    , { username = "GMHikaru"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , id = "4"
      , views = "1M"
      , isLive = True
      }
    , { username = "GMHikaru"
      , category = "Just Chatting"
      , imgUrl = sample_channel_image
      , id = "5"
      , views = "1M"
      , isLive = True
      }
    ]
