module Main exposing (main)

import Actions exposing (..)
import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Navbar exposing (navbar_view)
import Routes exposing (..)
import StreamerNavbar exposing (streamers_left_navbar)
import Types exposing (..)
import Updates exposing (..)
import Url
import Url.Parser exposing (parse)


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subs
        , onUrlChange = onUrlChange
        , onUrlRequest = onUrlRequest
        }


subs : a -> Sub msg
subs _ =
    Sub.none


init : flags -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    ( { collapse_left_navbar = True
      , dots_view = True
      , url = url
      , route = parse_route_url url
      , logged_in = True
      , key = key
      , dark_mode = True
      }
    , Cmd.none
    )


view : Model -> Browser.Document Msg
view model =
    { title = "App"
    , body =
        [ div
            [ class "flex flex-col h-screen" ]
            [ navbar_view "flex items-center justify-between border-b  border-black bg-gray-800  shadow-lg py-2 px-2" model
            , main_
                [ class "flex-grow bg-gray-900 text-white flex items-start overflow-auto" ]
                [ streamers_left_navbar "h-full w-1/12 md:w-1/5 bg-blue-900 flex flex-col items-center p-0 justify-center" model
                , case model.route of
                    HomeR ->
                        div [] [ text "home route" ]

                    StreamR streamer_id ->
                        div [] [ text <| "watching:" ++ streamer_id ]

                    ErrorR ->
                        div [] [ text "error parsing url" ]
                ]
            ]
        ]
    }
