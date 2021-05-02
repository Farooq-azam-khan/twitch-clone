module Main exposing (main)
import Browser 
import Html exposing (..)

main : Program () Model Msg
main = Browser.sandbox {init = init, view = view, update = update}

type alias Model = {}
type Msg = NoOp 

init : Model 
init = {}

update : Msg -> Model -> Model 
update msg model = 
    case msg of 
        NoOp -> 
            model 

view : Model -> Html Msg 
view model = div [] []