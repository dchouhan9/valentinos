require "bundler/capistrano"

set :application, "valentinos"
set :domain, "77.73.5.134"
set :user, "adam"

set :scm, :git
set :repository,  "git@github.com:adamedia/valentinos.git"

set :use_sudo, false
set :branch, "master"
set :deploy_via, :remote_cache
set :deploy_to, "/home/#{user}/valentino-bingley.co.uk/"
set :rails_env, "production"
set :keep_releases, 1

role :app, domain
role :web, domain
role :db,  domain, :primary => true

default_run_options[:pty] = true

namespace :deploy do

  # Make sure shared files are still shared when we deploy over the top of them
  # Create any directories we need on first deploy
  desc "Make sure assets persist, new directories are created."
  after "deploy:update_code" do    
      run "mkdir -p #{deploy_to}/#{shared_dir}/config"
      run "mkdir -p #{deploy_to}/#{shared_dir}/public/system"

      run "ln -sf #{deploy_to}/#{shared_dir}/config/database.yml #{current_release}/config/database.yml" 
      run "rm -rf #{current_release}/public/system"
      run "ln -sf #{deploy_to}/#{shared_dir}/public/system #{current_release}/public/system"
    end
  
  desc "Automatically cleanup after deploy."
  after "deploy", "deploy:cleanup"
  
  desc "Restarting mod_rails with restart.txt"
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "touch #{current_path}/tmp/restart.txt"
   end

   [:start, :stop].each do |t|
     desc "#{t} task is a no-op with mod_rails"
     task t, :roles => :app do ; end
   end

end