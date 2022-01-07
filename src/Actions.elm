module Actions exposing (..)

import Browser
import Types exposing (..)
import Url



-- MSG


onUrlRequest : Browser.UrlRequest -> Msg
onUrlRequest req =
    LinkClicked req


onUrlChange : Url.Url -> Msg
onUrlChange url =
    UrlChanged url


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
