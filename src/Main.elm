module Main exposing (main)

import Actions exposing (..)
import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Navbars.Navbar exposing (navbar_view)
import Routes exposing (..)
import StreamComponent exposing (..)
import Navbars.StreamerNavbar exposing (streamers_left_navbar)
import Types exposing (..)
import Updates exposing (..)
import Url


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
                [ streamers_left_navbar  model
                , case model.route of
                    HomeR ->
                        div [] [ text "home route" ]

                    StreamR streamer_id ->
                        streamComponent "flex-grow w-11/12 md:w-3/5 flex h-full" streamer_id model

                    -- div [] [ text <| "watching:" ++ streamer_id ]
                    ErrorR ->
                        div [] [ text "error parsing url" ]
                ]
            ]
        ]
    }
