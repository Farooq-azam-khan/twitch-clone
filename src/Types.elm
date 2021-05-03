module Types exposing (..)

type alias Model = {collapse_left_navbar : Bool, dots_view : Bool}
type Msg 
    = NoOp 
    | ToggleLeftNavbar 
    | ToggleDotsButton