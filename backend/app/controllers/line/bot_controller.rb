class Line::BotController < ApplicationController
  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_id = '1660684496'
      config.channel_secret = '09022c6e42cdb7acb4067abde9098586'
      config.channel_token = 'qynHjBB0tfk8gtDmc+dVqsux56Uv3pK5s8B46Md3lJwp5lHPj6xkKqx3dI9Ia42Uuo/2f4qzk3K4R02U4+lBh+R7cx6lV5jgtsEJlK8aI52mrWat5fL+W/JuNlo5PPaWizF15Iei5ry8rEFmgVy0+wdB04t89/1O/w1cDnyilFU='
    }
  end

  def callback
    body = request.body.read
    events = client.parse_events_from(body)
    p events
    events.each do |event|
      case event
      when Line::Bot::Event::Message
        case event.type
        when Line::Bot::Event::MessageType::Text
          message = {
            type: 'text',
            text: event.message['text']
          }
          client.reply_message(event['replyToken'], message)
        when Line::Bot::Event::MessageType::Image, Line::Bot::Event::MessageType::Video
          response = client.get_message_content(event.message['id'])
          tf = Tempfile.open("content")
          tf.write(response.body)
        end
      end
    end
    head :ok
  end
end
