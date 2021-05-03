module Buttons exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)

signup_button : Html msg 
signup_button = button [class "bg-purple-500 text-sm font-semibold text-white hover:bg-purple-600 rounded-md px-2 py-1"] [text "Sign up"]