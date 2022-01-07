module Types exposing (..)

import Browser.Navigation as Nav
import Routes exposing (..)
import Url


type alias Model =
    { logged_in : Bool
    , collapse_left_navbar : Bool
    , dots_view : Bool
    , key : Nav.Key
    , route : Route
    , dark_mode : Bool
    , url : Url.Url
    }
