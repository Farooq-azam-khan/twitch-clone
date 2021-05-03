module Icons exposing (..)
import Svg exposing (..)
import Html.Attributes exposing (attribute)
import Svg.Attributes exposing (class, fill, viewBox, d)

dots_horizontal : Svg msg 
dots_horizontal = 
    svg [ class "w-6 h-6", fill "none", attribute "stroke" "currentColor", viewBox "0 0 24 24", attribute "xmlns" "http://www.w3.org/2000/svg" ]
        [ path [ d "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z", attribute "stroke-linecap" "round", attribute "stroke-linejoin" "round", attribute "stroke-width" "2" ]
            []
        ]