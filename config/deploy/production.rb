server ENV['SERVER_HOST'], user: 'deploy', roles: %w(app web)
set :branch, 'master'

set :capose_commands, -> {
  [
    "build",
    "up -d"
  ]
}
