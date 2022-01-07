module StreamComponent exposing (..)

import Actions exposing (..)
import Assets exposing (sample_channel_image)
import Html exposing (..)
import Html.Attributes exposing (..)
import Types exposing (..)


streamComponent : String -> String -> Model -> Html Msg
streamComponent class_name streamer_id model =
    section
        [ class class_name ]
        [ div
            [ class "w-9/12 flex-grow flex flex-col space-y-3 overflow-auto" ]
            [ video_section
            , channel_activities streamer_id
            , chat_section
            ]
        ]


chat_section : Html Msg
chat_section =
    section [] []


channel_activities : String -> Html msg
channel_activities streamer_id =
    section
        [ class "w-full flex items-center justify-between" ]
        [ div
            [ class "inline-flex space-x-2 pl-3" ]
            [ div
                [ class "overflow-hidden w-12 h-12 border-2 border-purple-700 rounded-full" ]
                [ img [ class "w-full h-full", src sample_channel_image ] [] ]
            , div [] [ text streamer_id ]
            ]
        ]


video_section : Html msg
video_section =
    section
        [ class "w-full h-64 bg-orange-700" ]
        [ img [ class "w-full h-full", src "", alt "" ] [] ]
