using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Guideline.Models;


namespace Guideline.Services
{
    public class MessageService
    {
        // GET api/<controller>
        public IEnumerable<Message> GetAllMessage()
        {
            return MessageDb.MESSAGES;
        }

        // GET api/<controller>/5
        public Message Get(int id)
        {
            return MessageDb.MESSAGES.FirstOrDefault(v => v.id == id);
        }

        public HttpResponseMessage Post(int id)
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == id);
            var m = new Message();
            m.id = MessageDb.LastId++;
            m.content = "add message";
            MessageDb.MESSAGES.Add(m);
            if(s.messageIds == null)
                {
                    s.messageIds = new List<int> { m.id };
                }
                else
                {
                    s.messageIds.Add(m.id);
                }
                return new HttpResponseMessage(HttpStatusCode.OK);
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, Message item)
        {
            var m = MessageDb.MESSAGES.FirstOrDefault(v => v.id == id);
            if (m == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                m.content = item.content;
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            var m = MessageDb.MESSAGES.FirstOrDefault(v => v.id == id);
            if (m == null)
            {
                throw (new NullReferenceException());
            }
            else
            {
                SectionDb.SECTIONS.ForEach(section =>
                {
                    if (section.messageIds == null)
                    {
                        section.messageIds = new List<int> { };
                    }
                    else
                    {
                        section.messageIds = section.messageIds.Where(messageId => messageId != id).ToList();
                    }
                    
                });
                MessageDb.MESSAGES.Remove(m);
            }            
        }
    }
}