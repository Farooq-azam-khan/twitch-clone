module Navbar exposing (navbar_view)

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
            [ class "flex items-center justify-between text-white" ]
            [ span
                [ class "inline-flex items-center space-x-4" ]
                [ span [] [ text "Twitch Logo" ]
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
                , a
                    [ href "#", class "text-white hover:text-purple-600" ]
                    [ span [ class "block md:hidden" ] [ text "briefcase-icon" ]
                    , span [ class "hidden md:block" ] [ text "Esport" ]
                    ]
                , a
                    [ href "#", class "text-white hover:text-purple-600" ]
                    [ span [ class "block md:hidden" ] [ text "music-icon" ]
                    , span [ class "hidden md:block" ] [ text "Music" ]
                    ]
                ]
            ]
        ]



-- [ div
--     [ class "flex items-center space-x-4" ]
--     [ button [] [ text "logo" ]
--     , navbar_text_link "Browse"
--     , span [] [ text "|" ]
--     , navbar_text_link "Esports"
--     , navbar_text_link "Message"
--     , div
--         [ class "relative" ]
--         [ button [ class "px-1 py-1 hover:bg-gray-700 rounded-md", onClick ToggleDotsButton ] [ dots_horizontal ]
--         , if model.dots_view then
--             div
--                 [ class "mt-10 absolute space-y-2 w-44 text-sm h-96 overflow-y-auto rounded-md bg-gray-800 border border-gray-900 px-3 py-4 shadow-xl text-white inset-0" ]
--                 [ div [ class "uppercase font-semibold text-gray-400" ] [ text "General" ]
--                 , div
--                     [ class "space-y-1 border-b pb-3 border-gray-400" ]
--                     [ dropdown_link "About"
--                     , dropdown_link "Advertisers"
--                     , dropdown_link "Blog"
--                     , dropdown_link "Developers"
--                     , dropdown_link "Download Apps"
--                     , dropdown_link "Gift Card"
--                     , dropdown_link "IGDB"
--                     , dropdown_link "Jobs"
--                     , dropdown_link "Loot Cave - Store"
--                     , dropdown_link "Partners"
--                     , dropdown_link "Press"
--                     , dropdown_link "Turbo"
--                     ]
--                 , dropdown_header "Help & Legal"
--                 , div
--                     [ class "space-y-1 " ]
--                     [ dropdown_link "Accessibility Statement"
--                     , dropdown_link "Ad Choices"
--                     , dropdown_link "Community Guidelines"
--                     , dropdown_link "Cookie Policy"
--                     , dropdown_link "Help"
--                     , dropdown_link "Privacy Policy"
--                     , dropdown_link "Security"
--                     , dropdown_link "Terms"
--                     ]
--                 ]
--           else
--             text ""
--         ]
--     ]
-- , div
--     [ class "flex items-center space-x-2" ]
--     [ button [] [ text "inbox" ]
--     , button [] [ text "Login" ]
--     , button [] [ text "Sign Up" ]
--     , button [] [ text "profile" ]
--     ]
-- ]
