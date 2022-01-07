module Navbar exposing (navbar_view)

import Assets exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Icons exposing (dots_horizontal)
import Types exposing (..)


navbar_view : String -> Model -> Html Msg
navbar_view class_name _ =
    nav
        [ class class_name ]
        [ left_nav_items
        , -- search bar
          span
            [ class "inline-flex items-center" ]
            [ input [ class "px-4 py-2 w-64 bg-gray-500 rounded-l-md", placeholder "search" ] []
            , button [ class "px-4 py-2 rounded-r-md text-white ml-1 bg-gray-600" ] [ text "search" ]
            ]
        , right_nav_items
        ]


left_nav_items : Html msg
left_nav_items =
    span
        [ class "flex items-center justify-between text-white" ]
        [ span
            [ class "inline-flex items-center space-x-4" ]
            [ span [] [ twitchLogo ]
            , a
                -- following nav link item
                [ href "#", class "text-white hover:text-purple-600" ]
                [ span [ class "block md:hidden" ] [ text "heart-icon" ]
                , span [ class "hidden md:block" ] [ text "Following" ]
                ]
            , a
                -- browse nav link item
                [ href "#", class "text-white hover:text-purple-600" ]
                [ span [ class "block md:hidden" ] [ text "duplicate-icon" ]
                , span [ class "hidden md:block" ] [ text "Browse" ]
                ]
            , button
                [ class "text-white p-1 hover:bg-gray-600 hover:rounded-md" ]
                [ span [ class "block md:hidden" ] [ dots_horizontal ]
                , span [ class "hidden md:block" ] [ dots_horizontal ]
                ]
            ]
        ]


right_nav_items : Html msg
right_nav_items =
    span
        -- right navbar
        [ class "flex items-center justify-center space-x-2" ]
        [ button
            -- prime loot nav item
            [ class "text-white relative z-20 hover:bg-gray-700 rounded-lg p-1" ]
            [ text "desktop-icon" ]
        , button
            -- notifications nav item
            [ class "relative text-white z-20 hover:bg-gray-700 rounded-lg p-1" ]
            [ text "bell-outline-icon" ]
        , button
            -- whispers nav item
            [ class "text-white relative z-20 hover:bg-gray-700 rounded-lg p-1" ]
            [ text "annotation-outline-icon" ]
        , button
            -- get bits nav item
            [ class "flex items-center space-x-1 justify-between bg-gray-600 rounded-md relative z-20 text-white py-1 px-2" ]
            [ bits_icon "w-4 h-4", span [] [ text "Get Bits" ] ]
        , button
            -- profile nav item
            [ class "relative z-20 w-7 h-7" ]
            [ profileImage "rounded-full w-full h-full " ]
        ]
