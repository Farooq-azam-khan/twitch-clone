module Main exposing (main)

import Actions exposing (Msg(..), onUrlChange, onUrlRequest)
import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Icons
import Navbars.Navbar exposing (navbar_view)
import Navbars.StreamerNavbar exposing (streamers_left_navbar)
import Routes exposing (..)
import StreamComponent exposing (..)
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


carousel_init : Carousel
carousel_init =
    { prev_elements =
        [ { user_name = "UserName-0"
          , user_category = "category"
          , user_tags = [ "English", "Closed Captions" ]
          , descritpion = "Check out this feature channel!"
          }
        , { user_name = "UserName-1"
          , user_category = "category"
          , user_tags = [ "English", "Closed Captions" ]
          , descritpion = "Check out this feature channel!"
          }
        ]
    , active_element =
        { user_name = "UserName-2"
        , user_category = "category"
        , user_tags = [ "English", "Closed Captions" ]
        , descritpion = "Check out this feature channel!"
        }
    , next_elements =
        [ { user_name = "UserName-3"
          , user_category = "category"
          , user_tags = [ "English", "Closed Captions" ]
          , descritpion = "Check out this feature channel!"
          }
        , { user_name = "UserName-4"
          , user_category = "category"
          , user_tags = [ "English", "Closed Captions" ]
          , descritpion = "Check out this feature channel!"
          }
        ]
    }


init : flags -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    ( { collapse_left_navbar = True
      , dots_view = True
      , url = url
      , route = parse_route_url url
      , logged_in = True
      , key = key
      , dark_mode = True
      , carousel = carousel_init
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
                [ streamers_left_navbar model
                , case model.route of
                    HomeR ->
                        home_route_component model

                    StreamR streamer_id ->
                        streamComponent "flex-grow w-11/12 md:w-3/5 flex h-full" streamer_id model

                    -- div [] [ text <| "watching:" ++ streamer_id ]
                    ErrorR ->
                        div [] [ text "error parsing url" ]
                ]
            ]
        ]
    }


live_icon : Html Msg
live_icon =
    span [ class "text-white bg-red-500 text-sm px-2 py-1 rounded-md" ] [ text "LIVE" ]


tag_component : String -> Html Msg
tag_component tag_comp =
    span [ class "bg-gray-800 px-2 py-1 rounded-full text-white text-sm" ] [ text tag_comp ]


home_route_component : Model -> Html Msg
home_route_component model =
    div [ class "grid grid-cols-5 max-w-3xl w-full mx-auto mt-10" ]
        [ div [ class "col-span-1 flex items-center" ]
            [ button
                [ onClick ClickLeftCarouselBtn, class "rounded-md p-2 hover:bg-gray-500" ]
                [ Icons.left_chevron_icon "w-6 h-6" ]
            ]
        , div [ class "col-span-3 bg-gray-800 " ]
            [ section [ class "flex shadow-xl rounded-xl" ]
                [ div [ class "flex flex-col justify-between px-3 py-1 w-full" ]
                    [ div [] [ live_icon ]
                    , div [ class "flex items-center justify-between" ]
                        [ button [] [ Icons.play_icon "w-6 h-6" ]
                        , span [ class "space-x-3 flex items-center" ]
                            [ button [] [ Icons.cog_icon "w-6 h-6" ]
                            , button [] [ Icons.zoom_in_icon "w-6 h-6" ]
                            ]
                        ]
                    ]
                , div
                    [ class "bg-gray-700 px-2 py-3" ]
                    [ div [ class "flex space-x-5" ]
                        [ span [ class "rounded-full w-10 h-10 bg-orange-500" ] []
                        , div [ class "" ]
                            [ div [] [ a [ href "#", class "text-sm text-purple-400 hover:text-purple-500 hover:underline font-semibold" ] [ text model.carousel.active_element.user_name ] ]
                            , div [] [ a [ class "text-sm text-purple-300 hover:underline hover:text-purple-500" ] [ text "category" ] ]
                            ]
                        ]
                    , span [ class "space-x-5" ] [ tag_component "English", tag_component "Closed Captions" ]
                    , div [ class "text-md mt-2" ] [ text "Check out this featured channel!" ]
                    ]
                ]
            ]
        , div [ class "col-span-1 flex justify-end items-center" ]
            [ button
                [ onClick ClickRightCarouselBtn, class "hover:bg-gray-500 p-2 rounded-md" ]
                [ Icons.right_chevron_icon "w-6 h-6" ]
            ]
        ]
