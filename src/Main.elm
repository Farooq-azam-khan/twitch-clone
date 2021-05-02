module Main exposing (main)
import Browser 

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

main : Program () Model Msg
main = Browser.sandbox {init = init, view = view, update = update}

type alias Model = {collapse_left_navbar : Bool}
type Msg = NoOp | ToggleLeftNavbar

init : Model 
init = { collapse_left_navbar = False }

css : String -> Html Msg 
css path =
    node "link" [ rel "stylesheet", href path ] []

update : Msg -> Model -> Model 
update msg model = 
    case msg of 
        NoOp -> 
            model 
        ToggleLeftNavbar -> 
            {model | collapse_left_navbar = not model.collapse_left_navbar}


view : Model -> Html Msg 
view model = 
    div [] 
        [css "../tailwind.css"
        ,  div 
            [class "w-screen h-screen flex flex-col text-white"] 
            [nav 
                [class "flex items-center justify-between bg-gray-800 border-b border-black shadow-lg py-2 px-2"] 
                [div 
                    [class "flex items-center space-x-4"] 
                    [ span [] [text "logo"]
                    , span [] [text "Browse"]
                    , span [] [text "..."]
                    ]
                , div 
                    [class "flex items-center space-x-2"]
                    [ button [] [text "inbox"]
                    , button [] [text "Login"]
                    , button [] [text "Sign Up"]
                    , button [] [text "profile"]
                    ]
                ]
            , main_ 
                [class "grid grid-flow-col grid-cols-12 h-full bg-gray-900 overflow-auto"]
                [ if model.collapse_left_navbar then 
                    aside 
                        [class "col-span-1 bg-pink-900"] 
                        [ div 
                            [class "flex items-center justify-center"]
                            [button [onClick ToggleLeftNavbar] [text "|->"]]
                        ]
                    else 
                    aside 
                        [class "col-span-3 bg-pink-900"] 
                        [div 
                            [class "flex items-center justify-between px-2"] 
                            [ span [class "capitalize"] [text "Recommended Channels"]
                            , button [onClick ToggleLeftNavbar] [text "<-|"]
                            ]
                         
                        ]
                , if model.collapse_left_navbar then 
                    section [class "col-span-11 bg-indigo-900"] [text "main area section"]
                    else 
                    section [class "col-span-9 bg-indigo-900"] [text "main area section"]
                    
                ]
            ]
        ]