module Updates exposing (..)

import Actions exposing (..)
import Browser
import Browser.Navigation as Nav
import Routes exposing (..)
import Types exposing (..)
import Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url, route = parse_route_url url }, Cmd.none )

        ToggleLeftNavbar ->
            ( { model | collapse_left_navbar = not model.collapse_left_navbar }, Cmd.none )

        ClickRightCarouselBtn ->
            ( { model | carousel = click_next_element model.carousel }, Cmd.none )

        ClickLeftCarouselBtn ->
            ( { model | carousel = click_prev_element model.carousel }, Cmd.none )
