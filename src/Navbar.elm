module Navbar exposing (navbar_view)

import Assets exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Icons exposing (dots_horizontal)
import Types exposing (..)


navbar_text_link : String -> Html Msg
navbar_text_link txt =
    a [ href "#", class "font-semibold text-lg hover:text-purple-400 text-gray-100" ] [ text txt ]


dropdown_link : String -> Html Msg
dropdown_link txt =
    div [ class "text-white capitalize" ] [ text txt ]


dropdown_header : String -> Html Msg
dropdown_header txt =
    div [ class "uppercase font-semibold text-gray-400" ] [ text txt ]


navbar_view : String -> Model -> Html Msg
navbar_view class_name _ =
    nav
        [ class class_name ]
        [ div
            -- left nav items
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
        , -- search bar
          span
            [ class "inline-flex items-center" ]
            [ input [ class "px-4 py-2 w-64 bg-gray-500 rounded-l-md", placeholder "search" ] []
            , button [ class "px-4 py-2 rounded-r-md text-white ml-1 bg-gray-600" ] [ text "search" ]
            ]
        , span
            -- left navbar
            []
            [ span
                -- prime loot nav item
                [ class "relative text-white mr-1" ]
                [ button
                    [ class "relative z-20 hover:bg-gray-700 rounded-lg p-1" ]
                    [ text "desktop-icon" ]
                ]
            , span
                -- notifications nav item
                [ class "relative text-white mr-1" ]
                [ button
                    [ class "relative z-20 hover:bg-gray-700 rounded-lg p-1" ]
                    [ text "bell-outline-icon" ]
                ]

            -- assume user is logged in for now
            , span
                -- whispers nav item
                [ class "relative text-white mr-1" ]
                [ button
                    [ class "relative z-20 hover:bg-gray-700 rounded-lg p-1" ]
                    [ text "annotation-outline-icon" ]
                ]
            , span
                -- get bits nav item
                [ class "relative mr-2" ]
                [ button
                    [ class "block relative z-20 text-white hover:bg-gray-700 rounded-lg p-1 md:hidden" ]
                    [ text "bits-icon", text "Get Bits" ]
                ]
            , span
                -- profile nav item
                [ class "relative text-white" ]
                [ button
                    [ class "relative z-20" ]
                    [ text "profile-image" ]
                ]
            ]
        ]
