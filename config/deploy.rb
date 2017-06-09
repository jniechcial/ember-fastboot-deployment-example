lock '3.8.1'

set :application, 'APP-NAME'
set :repo_url, 'REPO-URL'

set :deploy_to, -> { "/home/deploy/apps/#{fetch(:application)}" }
