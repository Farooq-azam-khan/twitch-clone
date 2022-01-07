module Main exposing (main)

import Browser
import Buttons exposing (signup_button)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Navbar exposing (navbar_view)
import StreamerNavbar exposing (streamers_left_navbar)
import Types exposing (..)


main : Program () Model Msg
main =
    Browser.sandbox { init = init, view = view, update = update }


init : Model
init =
    { collapse_left_navbar = True
    , dots_view = True
    , logged_in = True
    }


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model

        ToggleLeftNavbar ->
            { model | collapse_left_navbar = not model.collapse_left_navbar }

        ToggleDotsButton ->
            { model | dots_view = not model.dots_view }


view : Model -> Html Msg
view model =
    div
        [ class "flex flex-col h-screen" ]
        [ navbar_view "flex items-center justify-between border-b  border-black bg-gray-800  shadow-lg py-2 px-2" model
        , main_
            [ class "flex-grow bg-gray-900 text-white flex items-start overflow-auto" ]
            [ streamers_left_navbar "h-full w-1/12 md:w-1/5 bg-blue-900 flex flex-col items-center p-0 justify-center" model ]
        ]



-- type alias Streamer = {name: String, category: String, views: String}


streamer_sidebar_view : Html Msg
streamer_sidebar_view =
    button
        [ class "inline-flex items-center justify-between space-x-3 hover:bg-gray-700 w-full px-3 py-1 focus:outline-none" ]
        [ div
            [ class "w-full flex space-x-2" ]
            [ span
                [ class "w-10 h-10 bg-green-300 rounded-full" ]
                []
            , span
                [ class "flex flex-col text-sm " ]
                [ span
                    [ class "font-semibold text-white" ]
                    [ text "myName" ]
                , span [] [ text "Minecraft" ]
                ]
            ]
        , span [ class "flex items-center space-x-2" ] [ span [ class "w-3 h-3 bg-red-500 rounded-full" ] [], span [] [ text "18.2K" ] ]
        ]


closed_side_bar : Html Msg
closed_side_bar =
    div []
        [ div
            [ class "flex items-center justify-center" ]
            [ button [ onClick ToggleLeftNavbar ] [ text "|->" ]
            ]
        , div
            [ class "w-full flex flex-col items-center justify-center mt-3 space-y-3" ]
            [ collapsed_streamer_view, collapsed_streamer_view, collapsed_streamer_view, collapsed_streamer_view ]
        ]


collapsed_streamer_view : Html Msg
collapsed_streamer_view =
    button [ class "w-10 h-10 bg-purple-300 rounded-full" ] [ text "" ]


open_side_bar : Html Msg
open_side_bar =
    div
        [ class "flex flex-col items-center justify-between space-y-3" ]
        [ div
            [ class "inline-flex items-center justify-between w-full px-3" ]
            [ span [ class "capitalize" ] [ text "Recommended Channels" ]
            , button [ onClick ToggleLeftNavbar ] [ text "<-|" ]
            ]
        , div [ class "w-full space-y-1" ] [ streamer_sidebar_view, streamer_sidebar_view, streamer_sidebar_view, streamer_sidebar_view ]
        , banner_view
        ]


banner_view : Html Msg
banner_view =
    div
        [ class "bg-gray-900 border border-gray-900 shadow-md rounded-md px-3 py-3 space-y-3 mx-3 mt-3" ]
        [ h2
            [ class "font-semibold text-white text-2xl" ]
            [ span [] [ text "Join the " ]
            , span [ class "text-purple-400" ] [ text "Twitch" ]
            , span [] [ text " community!" ]
            ]
        , p [ class "text-md text-gray-200" ] [ text "Discover the Best live streams anywhere" ]
        , signup_button
        ]
