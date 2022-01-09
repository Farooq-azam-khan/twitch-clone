module StreamerNavbar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Types exposing (..)
import Icons exposing (..)
import Actions exposing (..)

streamers_left_navbar :  Model -> Html Msg
streamers_left_navbar model =
    div
        [ class "h-full bg-blue-900 flex p-0 " ]
        [ if model.collapse_left_navbar 
          then  streamer_less_detailed_navbar model 
          else streamer_detailed_navbar model 
        ]

streamer_detailed_navbar : Model -> Html Msg 
streamer_detailed_navbar model = 
    div
        [ class "bg-gray-800 flex-grow overflow-y-auto w-full" ]
        -- Following Channels
        [ if model.logged_in then
                div
                    [ class "md:flex md:items-center md:justify-between md:m-2" ]
                    [ span
                        [ class "hidden md:block md:uppercase text-xs" ]
                        [ text "Followed Channels" ]
                    , button 
                        [ onClick ToggleLeftNavbar
                        , class "hidden md:block hover:bg-blue-800 p-1 rounded-lg" 
                        ] 
                        [ arrow_left_icon "w-4 h-4" 
                        ]
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



streamer_less_detailed_navbar : Model -> Html Msg 
streamer_less_detailed_navbar model = 
    div 
        [ class "space-y-7 w-10 flex-grow flex justify-start items-center flex-col overflow-y-auto bg-gray-800 " 
        ] 
        [ button 
            [ onClick ToggleLeftNavbar
            , class "mt-3 block hover:bg-blue-800 p-1 rounded-lg" 
            ] 
            [arrow_right_icon "w-4 h-4"
            ]
        , if model.logged_in 
            then div 
                    [ class "flex flex-col items-center justify-center"
                    ] 
                    [ collapsed_navbar_items_list 
                        (heart_icon "w-6 h-6")
                        [ div [] [text "x"]
                        , div [] [text "y"]
                        , div [] [text "z"]]
                        ]
            else text ""
        , collapsed_navbar_items_list 
            (video_camera_icon "w-6 h-6") 
            [ div []  [text "a"]
            , div [] [text "b"]
            , div [] [text "c"]
            ]
        , collapsed_navbar_items_list 
            (users_icon "w-6 h-6")
            [ div [] [text "1"]
            , div [] [text "2"]
            , div [] [text "3"]
            ]
        ]
        

collapsed_navbar_items_list : Html Msg -> List (Html Msg) -> Html Msg 
collapsed_navbar_items_list icon items = 
    div 
    [ class "flex flex-col items-center justify-center" ] 
    [ div [] [ icon  ]
    , ul 
        [] 
        items 
    ]