module Main exposing (main)

import Browser
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
