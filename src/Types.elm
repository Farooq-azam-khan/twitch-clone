module Types exposing (..)

import Browser.Navigation as Nav
import Routes exposing (..)
import Url



-- maybe use Array instead of List


type alias CarouselElement =
    { user_name : String
    , user_category : String
    , user_tags : List String
    , descritpion : String
    }


type alias Carousel =
    { prev_elements : List CarouselElement
    , active_element : CarouselElement
    , next_elements : List CarouselElement
    }


click_next_element : Carousel -> Carousel
click_next_element carousel =
    case List.head carousel.next_elements of
        Just next_active_element ->
            { prev_elements = List.append carousel.prev_elements [ carousel.active_element ]
            , active_element = next_active_element
            , next_elements = Maybe.withDefault [] (List.tail carousel.next_elements)
            }

        Nothing ->
            carousel


click_prev_element : Carousel -> Carousel
click_prev_element carousel =
    case List.head <| List.reverse carousel.prev_elements of
        Just next_active_element ->
            { prev_elements = List.take (List.length carousel.prev_elements - 1) carousel.prev_elements
            , active_element = next_active_element
            , next_elements = List.append [ carousel.active_element ] carousel.next_elements
            }

        Nothing ->
            carousel


type alias Model =
    { logged_in : Bool
    , collapse_left_navbar : Bool
    , dots_view : Bool
    , key : Nav.Key
    , route : Route
    , dark_mode : Bool
    , url : Url.Url
    , carousel : Carousel
    }
