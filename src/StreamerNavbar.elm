module StreamerNavbar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Types exposing (..)


streamers_left_navbar : String -> Model -> Html msg
streamers_left_navbar class_name model =
    div
        [ class class_name ]
        [ div
            [ class "bg-gray-800 flex-grow overflow-y-auto w-full" ]
            -- assume user is logged in
            [ if model.logged_in then
                div
                    [ class "md:flex md:items-center md:justify-between md:m-2" ]
                    [ span
                        [ class "hidden md:block md:uppercase text-xs" ]
                        [ text "Followed Channels" ]
                    , button [ class "hidden md:block hover:bg-blue-800 p-1 rounded-lg" ] [ text "<-|" ]
                    ]

              else
                text ""
            , if model.logged_in then
                ul
                    [ class "hidden md:block  md:flex md:flex-col md:items-center md:items-stretch" ]
                    [ text "asdfasdfs" ]

              else
                text ""
            , div
                [ class "md:flex md:items-center md:justify-between md:m-2" ]
                [ span
                    [ class "hidden md:block md:uppercase md:text-xs" ]
                    [ text "Popular Channels" ]
                ]
            , ul
                [ class "mt-1 md:mt-0 flex flex-col items-center md:items-stretch" ]
                [ li
                    []
                    [ text "asdfasd" ]
                ]
            ]
        ]
