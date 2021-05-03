module Main exposing (main)
import Browser 

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Types exposing (..)
import Navbar exposing (navbar_view)
import Buttons exposing (signup_button)

main : Program () Model Msg
main = Browser.sandbox {init = init, view = view, update = update}



init : Model 
init = { collapse_left_navbar = True, dots_view = True}

css : String -> Html Msg 
css path =
    node "link" [ rel "stylesheet", href path ] []

update : Msg -> Model -> Model 
update msg model = 
    case msg of 
        NoOp -> 
            model 
        ToggleLeftNavbar -> 
            {model | collapse_left_navbar = not model.collapse_left_navbar}
        ToggleDotsButton -> 
            {model | dots_view = not model.dots_view}


view : Model -> Html Msg 
view model = 
     div 
        [class "w-screen h-screen flex flex-col text-white"] 
        [navbar_view model
        , main_ 
            [class "grid grid-flow-col grid-cols-12 h-full bg-gray-900 overflow-auto"]
            [ if model.collapse_left_navbar then 
                aside 
                    [class "col-span-1 bg-gray-800"] 
                    [ closed_side_bar
                    ]
                else 
                aside 
                    [class "col-span-3 bg-gray-800"] 
                    [open_side_bar
                    ]
            , if model.collapse_left_navbar then 
                section [class "col-span-11 bg-gray-900"] [text "main area section"]
                else 
                section [class "col-span-9 bg-gray-900"] [text "main area section"]
                
            ]
        ]

-- type alias Streamer = {name: String, category: String, views: String}
streamer_sidebar_view : Html Msg 
streamer_sidebar_view = 
    button 
        [class "inline-flex items-center justify-between space-x-3 hover:bg-gray-700 w-full px-3 py-1 focus:outline-none"]
        [ div 
            [class "w-full flex space-x-2"]  
            [ span 
                [class "w-10 h-10 bg-green-300 rounded-full"] 
                []
            , span 
                [ class "flex flex-col text-sm "] 
                [ span 
                    [ class "font-semibold text-white"] 
                    [ text "myName"]
                , span [] [text "Minecraft"]
                ]
            ]
        
        , span [class "flex items-center space-x-2"] [span [class "w-3 h-3 bg-red-500 rounded-full"] [], span [] [text "18.2K"]]
        ]

closed_side_bar : Html Msg 
closed_side_bar = 
    div [] 
        [ div 
            [class "flex items-center justify-center"]
            [button [onClick ToggleLeftNavbar] [text "|->"]
            ]
        , div 
            [class "w-full flex flex-col items-center justify-center mt-3 space-y-3"] 
            [collapsed_streamer_view,collapsed_streamer_view, collapsed_streamer_view, collapsed_streamer_view]
        ]

collapsed_streamer_view : Html Msg 
collapsed_streamer_view =
    button [class "w-10 h-10 bg-purple-300 rounded-full"] [text ""]

open_side_bar : Html Msg 
open_side_bar = 
    div 
        [class "flex flex-col items-center justify-between space-y-3"] 
        [ div 
            [class "inline-flex items-center justify-between w-full px-3"] 
            [ span [class "capitalize"] [text "Recommended Channels"]
            , button [onClick ToggleLeftNavbar] [text "<-|"]
            ]
        , div [class "w-full space-y-1"] [streamer_sidebar_view,streamer_sidebar_view, streamer_sidebar_view,streamer_sidebar_view]
        , banner_view
        ]

banner_view : Html Msg 
banner_view = 
    div 
        [class "bg-gray-900 border border-gray-900 shadow-md rounded-md px-3 py-3 space-y-3 mx-3 mt-3"]
        [ h2 
            [class "font-semibold text-white text-2xl"] 
            [ span [] [text "Join the "]
            , span [class "text-purple-400"] [text "Twitch"]
            , span [] [text " community!"]
            ]
        , p [class "text-md text-gray-200"] [text "Discover the Best live streams anywhere"]
        , signup_button
        ]

