module Types exposing (..)


type alias Model =
    { logged_in : Bool
    , collapse_left_navbar : Bool
    , dots_view : Bool

    --, dark_mode : Bool
    }


type Msg
    = NoOp
    | ToggleLeftNavbar
    | ToggleDotsButton
