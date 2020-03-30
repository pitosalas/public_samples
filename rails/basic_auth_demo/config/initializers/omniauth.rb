Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
    "633114100185-7pj3oj3ee677q2l5e2ivagq3jbb5129o.apps.googleusercontent.com",
    "-hSCirCWMlkophQSBd_vAHoz",
    {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
