module Icons exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Svg as Svg
import Svg.Attributes as SvgAttr


dots_horizontal : Svg.Svg msg
dots_horizontal =
    Svg.svg
        [ SvgAttr.class "w-6 h-6"
        , SvgAttr.fill "none"
        , attribute "stroke" "currentColor"
        , SvgAttr.viewBox "0 0 24 24"
        , attribute "xmlns" "http://www.w3.org/2000/svg"
        ]
        [ Svg.path
            [ SvgAttr.d "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            , attribute "stroke-linecap" "round"
            , attribute "stroke-linejoin" "round"
            , attribute "stroke-width" "2"
            ]
            []
        ]


bits_icon : String -> Html msg
bits_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name
        , SvgAttr.stroke "none"
        , SvgAttr.fill "currentColor"
        , SvgAttr.width "100%"
        , SvgAttr.height "100%"
        , SvgAttr.version "1.1"
        , SvgAttr.viewBox "0 0 20 20"
        , SvgAttr.x "0px"
        , SvgAttr.y "0px"
        ]
        [ Svg.path
            [ attribute "fillrule" "evenodd"
            , attribute "cliprule" "evenodd"
            , SvgAttr.d "M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
            ]
            []
        ]


annotation_icon : String -> Svg.Svg msg
annotation_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name -- "w-6 h-6"
        , SvgAttr.fill "none"
        , SvgAttr.stroke "currentColor"
        , SvgAttr.viewBox "0 0 24 24"
        ]
        [ Svg.path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.strokeWidth "2"
            , SvgAttr.d "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ]
            []
        ]


bell_icon : String -> Svg.Svg msg
bell_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name
        , SvgAttr.fill "none"
        , SvgAttr.stroke "currentColor"
        , SvgAttr.viewBox "0 0 24 24"
        ]
        [ Svg.path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.strokeWidth "2"
            , SvgAttr.d "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ]
            []
        ]


desktop_icon : String -> Svg.Svg msg
desktop_icon class_name =
    Svg.svg
        [ SvgAttr.class class_name
        , SvgAttr.fill "none"
        , SvgAttr.stroke "currentColor"
        , SvgAttr.viewBox "0 0 24 24"
        ]
        [ Svg.path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.strokeWidth "2"
            , SvgAttr.d "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ]
            []
        ]
